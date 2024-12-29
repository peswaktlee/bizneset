import type { FC, ReactNode } from 'react'

const Footer: FC = (): ReactNode => {
    return (
        <footer className='flex flex-col w-full h-auto'>
            <div className='bg-gray-200 w-full h-[1px] my-2' />
            
            <div className='max-w-6xl mb-2 mx-auto w-full items-center flex justify-between'>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center'>
                        <p className='text-sm text-gray-700 font-medium'>
                            &copy; {new Date().getFullYear()}&nbsp;
                            
                            <a href='https://jap-i.com' className='hover:text-[#377DFF] transition-all' target='_blank' rel='noreferrer'>
                                Peswaktlee Bizneset
                            </a>
                        </p>
                    </div>

                    <div className='h-4 w-[1px] bg-gray-200' />

                    <div className='flex items-center gap-3'>
                        <a href='https://jap-i.com' className='hover:text-[#377DFF] transition-all text-[13px] text-gray-600' target='_blank' rel='noreferrer'>
                            Kushtet e Sherbimit
                        </a>

                        <a href='https://jap-i.com' className='hover:text-[#377DFF] transition-all text-[13px] text-gray-600' target='_blank' rel='noreferrer'>
                            Politika e Privates
                        </a>
                    </div>
                </div>

                <div>
                    social icons
                </div>
            </div>
        </footer>
    )
}

export default Footer