import type { ChangeEvent } from 'react'

import { Translation } from '@/helpers/generals'
import { BusinessesFormState, NotificationState } from '@/data/states'
import { FILE_TYPES, MAX_LOGO_SIZE_IN_MB } from '@/data/constants'

const HandleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const { Notification } = NotificationState.getState()

    const { 
        Form,
        FormErrors,
        Updating,
        Loading,
        Creating,
        SetBusinessFormState
    } = BusinessesFormState.getState()

    const form = Form
    const formErrors = FormErrors
    const isDisabled = Loading || Updating || Creating

    if (form && formErrors && !isDisabled) {
        const file = e.target.files?.[0]

        if (file) {
            const fileName = file?.name
            const fileSize = file?.size
            const fileType = file?.type

            if (fileName && fileSize && fileType) {
                const allowedTypes = [FILE_TYPES.IMAGE_PNG, FILE_TYPES.IMAGE_WEBP]
                const allowedSize = MAX_LOGO_SIZE_IN_MB * 1024 * 1024

                const isAllowedType = allowedTypes.includes(fileType)

                if (isAllowedType) {
                    const isAllowedSize = fileSize <= allowedSize

                    if (isAllowedSize) {
                        form.Logo.Media = file
                        form.Logo.Size = fileSize
                        form.Logo.Type = fileType
                        form.Logo.Filename = fileName

                        formErrors.Logo = false

                        SetBusinessFormState({
                            Form: { ...form },
                            FormErrors: { ...formErrors }
                        })
                    }

                    else {
                        Notification.Error(Translation('file-size-limit-logo'))

                        formErrors.Logo = true

                        SetBusinessFormState({
                            Form: { ...form },
                            FormErrors: { ...formErrors }
                        }) 
                    }
                }
               
                else {
                    Notification.Error(Translation('invalid-file-type-for-logo'))

                    formErrors.Logo = true

                    SetBusinessFormState({
                        Form: { ...form },
                        FormErrors: { ...formErrors }
                    })
                }
            }

            else {
                Notification.Error(Translation('logo-upload-failed'))

                formErrors.Logo = true

                SetBusinessFormState({
                    Form: { ...form },
                    FormErrors: { ...formErrors }
                })
            }
        }

        else {
            Notification.Error(Translation('logo-upload-failed'))

            formErrors.Logo = true

            SetBusinessFormState({
                Form: { ...form },
                FormErrors: { ...formErrors }
            })
        }
    }
}

export default HandleLogoUpload