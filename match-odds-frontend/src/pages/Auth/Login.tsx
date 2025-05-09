import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import AuthLayout from "./AuthLayout";
import usePasswordVisibility from "@/components/iconLinks";

export default function LoginPage() {
    const { isVisible, VisibilityToggle } = usePasswordVisibility();
    return (
        <AuthLayout>
            <form>
                <Input variant="underlined" color="secondary" labelPlacement="outside" isRequired label="Email" placeholder="Enter email" type="email" />
                <br />
                <Input variant="underlined" color="secondary" labelPlacement="outside" isRequired label="Password" placeholder="Enter password" type={isVisible ? "text" : "password"} endContent={VisibilityToggle} />
                <br />
                <Button type='submit' color="secondary" className='font-medium' variant="flat"> LOGIN </Button>
            </form>
        </AuthLayout>
    );
};
