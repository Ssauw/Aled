import { IsEmail, IsString, MinLength, IsEnum } from 'class-validator';

export enum UserRole {
	USER = 'USER',
	ADMIN = 'ADMIN',
}

export class CreateUserDto {
	@IsEmail()
	email: string;

	@IsString()
	@MinLength(8)
	password: string;

	@IsEnum(UserRole)
	role: UserRole;
}