import type { FC, ReactNode } from 'react'

import { useEffect } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { NormalLayout } from '@/ui/layouts'
import { Translation } from '@/helpers/generals'
import { Header } from '@/ui/views'
import { AuthState, BusinessesFormState } from '@/data/states'
import { PageHeader } from '@/ui/components/generals'
import { SEO } from '@/ui/tools'

import { 
    BusinessData, 
    BusinessDataButtons, 
    Tabs, 
    Locations, 
    Links,
    Gallery
} from '@/ui/components/manage-business'

const AddBusiness: FC = (): ReactNode => {
    const { User } = AuthState(
        useShallow(state => {
            return {
                User: state.User
            }
        })
    )

    const { 
        Form, 
        Loading,
        SetBusinessFormState 
    } = BusinessesFormState(
        useShallow(state => {
            return {
                Form: state.Form,
                FormErrors: state.FormErrors,
                Loading: state.Loading,
                Creating: state.Creating,
                Updating: state.Updating,
                SetBusinessFormState: state.SetBusinessFormState
            }
        })
    )

    useEffect(() => {
        if (!Form) {
            const form = {
                Title: '',
                Description: '',
                Locations: [],
                Links: [],
                Logo: {
                    Type: null,
                    Media: null,
                    Filename: null,
                    Size: null
                },
                Gallery: [],
                Address: {
                    Address: '',
                    Website: '',
                    Email: '',
                    Phone: ''
                }
            }

            const formErrors = {
                Title: false,
                Description: false,
                Locations: false,
                Logo: false,
                Gallery: [],
                Links: [],
                Link: '',
                Address: {
                    Name: false,
                    Address: false,
                    Phone: false,
                    Email: false
                }
            }

            SetBusinessFormState({
                // @ts-ignorex
                Form: form,
                // @ts-ignore
                FormErrors: formErrors,
                Loading: false,
                Creating: false,
                Updating: false
            })
        }

        // @ts-ignore
    }, [User?._id])

    if (Form && !Loading && User) return (
        <NormalLayout>
            <SEO title={Translation('add-title')} index={false} />
            <Header />
            <PageHeader title='add-title' description='add-description' />

            <Tabs />

            <div className='max-w-6xl mx-auto h-auto pb-8'>
                <BusinessData />
                <Gallery />
                <Locations />
                <Links />
                <BusinessDataButtons />
            </div>
        </NormalLayout>
    )
}

export default AddBusiness