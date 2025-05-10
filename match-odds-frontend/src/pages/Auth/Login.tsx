import usePasswordVisibility from "@/components/Icons/iconLinks";
import AuthLayout from "@/layouts/AuthLayout";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";

export default function LoginPage() {
    const { isVisible, VisibilityToggle } = usePasswordVisibility();
    return (
        <AuthLayout>
            <form>
                <Input variant="flat" color="default" labelPlacement="outside" isRequired label="Email" placeholder="Enter your email" type="email" />
                <br />
                <Input variant="flat" color="default" labelPlacement="outside" isRequired label="Password" placeholder="Enter your password" type={isVisible ? "text" : "password"} endContent={VisibilityToggle} />
                <br />
                <Button type='submit' color="secondary" className='font-medium' variant="solid"> LOGIN </Button>
            </form>
        </AuthLayout>
    );
};
