import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import AuthLayout from "../../layouts/AuthLayout";
import usePasswordVisibility from "@/components/Icons/iconLinks";

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
