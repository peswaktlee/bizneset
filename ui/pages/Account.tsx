import type { FC, ReactNode } from 'react'

import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { NormalLayout } from '@/ui/layouts'
import { SEO } from '@/ui/tools'
import { Translation } from '@/helpers/generals'
import { Header } from '@/ui/views'
import { AuthState } from '@/data/states'
import { PageHeader } from '@/ui/components/generals'
import { Danger, Notifications, UserData, UserDataButtons } from '@/ui/components/account'

const Account: FC = (): ReactNode => {
    const { User, UserForm, Loading, SetAuthState } = AuthState(
        useShallow(state => {
            return {
                UserForm: state.UserForm,
                User: state.User,
                Loading: state.Loading,
                SetAuthState: state.SetAuthState
            }
        })
    )

    useEffect(() => {
        if (User) {
            const form = {
                Name: User.Name || '',
                Surname: User.Surname || '',
                Email: User.Email,
                Country: User.Country?._id || null,
                City: User.City?._id || null,
                OnBusinessStatuses: false
            }

            const formErrors = {
                Name: false,
                Surname: false,
                Email: false,
                Country: false,
                City: false,
                OnBusinessStatuses: false
            }

            SetAuthState({
                UserForm: form,
                UserFormErrors: formErrors
            })
        }
    }, [User])

    if (UserForm && !Loading && User) return (
        <NormalLayout>
            <SEO title={Translation('account')} index={false} />
            <Header />
            <PageHeader title='account-title' description='account-description' />

            <div className='max-w-6xl mx-auto h-auto pb-8'>
                <UserData />
                <UserDataButtons />
                <Notifications />
                <Danger />
            </div>
        </NormalLayout>
    )
}

export default Account