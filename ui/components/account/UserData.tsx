import type { ChangeEvent, FC, ReactNode } from 'react'
import type { UserFormInterface } from '@/ts'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { Input } from '@/ui/views'
import { AuthState } from '@/data/states'
import { StringValidation, EmailValidation } from '@/helpers/validations'

const UserData: FC = (): ReactNode => {
    const { 
        UserForm, 
        UserFormErrors,
        UpdatingUser,
        ClosingAccount,
        SetAuthState
    } = AuthState(
        useShallow(state => {
            return {
                UserForm: state.UserForm,
                UserFormErrors: state.UserFormErrors,
                UpdatingUser: state.UpdatingUser,
                ClosingAccount: state.ClosingAccount,
                SetAuthState: state.SetAuthState
            }
        })
    )

    const HandleInputs = (e: ChangeEvent<HTMLInputElement> | string, target: keyof UserFormInterface) => {
        const newValue = typeof e === 'string' ? e : e.target.value

        const form = UserForm 
        const formErros = UserFormErrors

        // @ts-ignore
        form[target] = newValue
        formErros[target] = true

        SetAuthState({ 
            UserForm: { ...form },
            UserFormErrors: { ...formErros }
        })
    }

    return (
        <Fragment>
            <p className='ml-0.5 mb-2 text-[15px] font-bold text-gray-900'>
                {Translation('profile')}
            </p>

            <div className='p-4 bg-white shadow-sm rounded-xl'>
                <div className='w-64'>
                    <Input
                        id='name'
                        label={Translation('name')}
                        placeholder={Translation('name')}
                        required={true}
                        value={UserForm?.Name || ''}
                        showError={true}
                        disabled={UpdatingUser || ClosingAccount}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => HandleInputs(e, 'Name')}
                        isError={StringValidation({
                            value: UserForm?.Name || '',
                            min: 2,
                            max: 99,
                            noNumbers: true,
                            noSpecialCharacters: true,
                            entityTranslation: 'name'
                        })}
                    />

                    <Input
                        id='surname'
                        label={Translation('surname')}
                        placeholder={Translation('surname')}
                        required={true}
                        value={UserForm?.Surname || ''}
                        showError={true}
                        disabled={UpdatingUser || ClosingAccount}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => HandleInputs(e, 'Surname')}
                        isError={StringValidation({
                            value: UserForm?.Name || '',
                            min: 2,
                            max: 99,
                            noNumbers: true,
                            noSpecialCharacters: true,
                            entityTranslation: 'surname'
                        })}
                    />

                    <Input
                        id='email'
                        label={Translation('email')}
                        placeholder={Translation('email')}
                        required={true}
                        value={UserForm?.Email || ''}
                        showError={false}
                        disabled={true}
                        isError={EmailValidation(UserForm?.Email)}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default UserData