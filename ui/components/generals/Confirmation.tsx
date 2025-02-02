import type { FC, ReactNode } from 'react'

import { useEffect, useRef } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { ConfirmationState } from '@/data/states'
import { Translation } from '@/helpers/generals'
import { Button } from '@/ui/views'
import { InfoIcon, XIcon } from '@/ui/icons'
import { BUTTON_TYPES } from '@/data/constants'

const Confirmation: FC = (): ReactNode => {
    'use memo'

    const { 
        Title, 
        Open, 
        SetConfirmationState, 
        onConfirm 
    } = ConfirmationState(
        useShallow(state => {
            return {
                Title: state.Title,
                Open: state.Open,
                SetConfirmationState: state.SetConfirmationState,
                onConfirm: state.onConfirm
            }
        })
    )

    const OnConfirmRef = useRef(onConfirm)
    const OpenRef = useRef(Open)

    useEffect(() => {
        OnConfirmRef.current = onConfirm
    }, [onConfirm])

    useEffect(() => {
        OpenRef.current = Open
    }, [Open])

    const Close = () => {
        OpenRef.current = false
        OnConfirmRef.current = () => { }

        SetConfirmationState({
            Title: '',
            Open: false,
            onConfirm: () => { }
        })
    }

    useEffect(() => {
        if (OpenRef?.current) {
            document.body.style.overflow = 'hidden'
            document.body.style.userSelect = 'none'
        }

        else {
            document.body.style.overflow = 'unset'
            document.body.style.userSelect = 'unset'
        }
    }, [OpenRef?.current])

    useEffect(() => {
        const CloseWithEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') Close()

            if (e.key === 'Enter') {
                OnConfirmRef.current()
                Close()
            }
        }

        document.addEventListener('keydown', CloseWithEsc)
        return () => document.removeEventListener('keydown', CloseWithEsc)
    }, [])

    const ConfirmHandle = () => {
        if (Open) {
            onConfirm()
            Close()
        }
    }

    if (Open) return (
        <div onClick={Close} className='select-none fixed top-0 left-0 bg-[#181818b5] right-0  overflow-y-auto md:inset-0 h-full flex justify-center items-center z-[99999999]'>
            <div className='relative w-full max-w-md max-h-full'>
                <div onClick={(e) => e.stopPropagation()} className='relative bg-white rounded-2xl shadow-md'>
                    <Button
                        type={BUTTON_TYPES.SECONDARY}
                        onClick={Close}
                        className='absolute h-auto w-auto top-3 right-2.5 text-sm p-[5px] ml-auto inline-flex'
                        icon={<XIcon className='w-4 h-4 text-gray-600' />}
                    />

                    <div className='p-6 pb-4 text-center'>
                        <div className='w-full flex justify-center items-center align-middle'>
                            <InfoIcon className='w-8 h-8' />
                        </div>

                        <h3 className='mb-5 mt-2 text-[17px] text-start font-normal'>
                            {Title}
                        </h3>
                        
                        <section className='w-full mt-8 flex justify-end gap-2 items-center'>
                            <Button type={BUTTON_TYPES.SECONDARY} onClick={Close}>
                                {Translation('cancel')}
                            </Button>

                            <Button onClick={ConfirmHandle}>
                                {Translation('confirm')}
                            </Button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmation