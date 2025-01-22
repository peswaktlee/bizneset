import type { ChangeEvent, FC, ReactNode } from 'react'
import type { UserFormInterface } from '@/ts'

import { Fragment } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { Translation } from '@/helpers/generals'
import { Input, Select } from '@/ui/views'
import { AuthState, CitiesState, CountriesState } from '@/data/states'

import { 
    CityValidation, 
    CountryValidation, 
    StringValidation, 
    EmailValidation 
} from '@/helpers/validations'

const UserData: FC = (): ReactNode => {
    const { Cities, Loading: CitiesLoading } = CitiesState(
        useShallow(
            state => {
                return {
                    Cities: state.Cities,
                    Loading: state.Loading
                }
            }
        )
    )

    const { Countries, Loading: CountriesLoading } = CountriesState(
        useShallow(
            state => {
                return {
                    Countries: state.Countries,
                    Loading: state.Loading
                }
            }
        )
    )

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

        form[target] = newValue
        formErros[target] = true

        SetAuthState({ 
            UserForm: form,
            UserFormErrors: formErros
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

                    <div className='mt-0 flex-row gap-5'>
                        <Select
                            id='country'
                            idAccessor='_id'
                            valueAccessor='Name'
                            label={Translation('country')}
                            placeholder={Translation('country')}
                            required={true}
                            value={UserForm?.City || ''}
                            showError={false}
                            validationFunction={CountryValidation}
                            list={Array.isArray(Countries) ? Countries : []}
                            disabled={UpdatingUser || ClosingAccount || CountriesLoading}
                            onChange={(id: string) => HandleInputs(id, 'City')}
                        />

                        <Select
                            id='city'
                            idAccessor='_id'
                            valueAccessor='Name'
                            label={Translation('city')}
                            placeholder={Translation('city')}
                            required={true}
                            value={UserForm?.Country || ''}
                            showError={false}
                            validationFunction={CityValidation}
                            list={Array.isArray(Cities) ? Cities : []}
                            disabled={UpdatingUser || ClosingAccount || CitiesLoading}
                            onChange={(id: string) => HandleInputs(id, 'City')}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default UserData