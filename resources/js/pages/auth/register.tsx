import AuthCard from '@/components/auth-card';

type Props = {
    passwordRules?: string;
};

export default function Register({ passwordRules: _passwordRules }: Props) {
    return <AuthCard defaultTab="register" />;
}
