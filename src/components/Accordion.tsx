import React, { useRef } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { ChevronDown } from 'react-feather'

interface AccordionProps extends React.HTMLAttributes<HTMLUListElement> {
	children: React.ReactNode
	value?: unknown
	onChange?: (value: unknown) => void
}

const AccordionContext = createContext<{
	selected: unknown
	setSelected: (selected: unknown) => void
}>({
	selected: undefined,
	setSelected: () => {},
})
export default function Accordion({
	children,
	value,
	onChange,
	...props
}: AccordionProps) {
	const [selected, setSelected] = useState(value)

	useEffect(() => {
		onChange?.(selected)
	}, [onChange, selected])
	return (
		<ul {...props}>
			<AccordionContext.Provider value={{ selected, setSelected }}>
				{children}
			</AccordionContext.Provider>
		</ul>
	)
}

interface AccordionItemProps {
	children: React.ReactNode
	value: unknown
	trigger: React.ReactNode
	border?: string
}
export function AccordionItem({
	children,
	value,
	trigger,
	...props
}: AccordionItemProps) {
	const { selected, setSelected } = useContext(AccordionContext)
	const open = selected === value

	const ref = useRef<HTMLDivElement>(null)
	return (
		<li
			className={`${
				props?.border === 'false' ? '' : 'border-b border-[#30485e]'
			}`}
			{...props}>
			<button
				onClick={() => setSelected(open ? null : value)}
				className='flex w-full text-nowrap justify-between items-center text-[1.8rem] md:text-[2.5rem] font-[600] p-4'>
				{trigger}
				<ChevronDown
					size={24}
					className={`transition-transform ${open ? 'rotate-180' : ''}`}
				/>
			</button>
			<div
				className={`overflow-y-hidden transition-all duration-500 ease-in-out`}
				style={{ height: open ? ref.current?.offsetHeight : 0 }}>
				<div className='pt-2 p-4' ref={ref}>
					{children}
				</div>
			</div>
		</li>
	)
}
