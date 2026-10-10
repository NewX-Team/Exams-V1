import AuthCard from '@/components/auth-card';

type Props = {
    status?: string;
    canResetPassword: boolean;
};

export default function Login({ status, canResetPassword }: Props) {
    return (
        <AuthCard
            defaultTab="login"
            status={status}
            canResetPassword={canResetPassword}
        />
    );
}
