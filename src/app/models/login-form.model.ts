export interface LoginFormModel {
    accountNumber: string;
    accountPassword: string;
}

export interface CreateUserFormModel {
    accountNumber: string;
    accountOwner: string;
    accountBalance: number;
    accountPassword: string;
}