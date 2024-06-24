import type { RegisterDto } from '@auth/models/register/registerDto.model'
import type { RegisterForm } from '@auth/models/register/registerForm.model'

import type { CurrentUser } from './current-user/currentUser.model'
import type { CurrentUserDto } from './current-user/currentUserDto.model'
import type { ForgotPasswordDto } from './forgot-password/forgotPasswordDto.model'
import type { ForgotPasswordForm } from './forgot-password/forgotPasswordForm.model'
import type { LoginDto } from './login/loginDto.model'
import type { LoginForm } from './login/loginForm.model'
import type { ResetPasswordDto } from './reset-password/resetPasswordDto.model'
import type { ResetPasswordForm } from './reset-password/resetPasswordForm.model'

export class AuthTransformer {
  static toCurrentUser(dto: CurrentUserDto): CurrentUser {
    const dossier = dto.dossier != null
      ? {
          name: dto.dossier.name,
          manager: {
            email: dto.dossier.manager.email,
            firstName: dto.dossier.manager.first_name,
            lastName: dto.dossier.manager.last_name,
            phone: dto.dossier.manager.phone,
          },
        }
      : null

    return {
      id: dto.id,
      contractNumber: dto.contract_number ?? null,
      dossier,
      email: dto.email,
      firstName: dto.first_name,
      fullName: `${dto.first_name} ${dto.last_name}`,
      lastName: dto.last_name,
      phone: dto.phone ?? null,
      vat: dto.vat ?? null,
    }
  }

  static toForgotPasswordDto(form: ForgotPasswordForm): ForgotPasswordDto {
    return {
      email: form.email,
    }
  }

  static toLoginDto(form: LoginForm): LoginDto {
    return {
      password: form.password,
      username: form.email,
    }
  }

  static toRegisterDto(form: RegisterForm): RegisterDto {
    return {
      email: form.email,
      first_name: form.firstName,
      last_name: form.lastName,
      phone: form.phone,
    }
  }

  static toResetPasswordDto(form: ResetPasswordForm): ResetPasswordDto {
    return {
      email: form.email,
      password: form.password,
      passwordConfirmation: form.password,
      token: form.token,
    }
  }
}
