import { EyeCloseIcon, EyeOpenIcon } from "@/components/icons";
import { Input } from "@heroui/input";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import AuthLayout from "./AuthLayout";

export default function LoginPage() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    const visible = (
        <button
            aria-label="toggle password visibility"
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
        >
            {isVisible ? <EyeCloseIcon /> : <EyeOpenIcon />}
        </button>
    );

    return (
        <AuthLayout>
            <form>
                <Input variant="underlined" color="secondary" labelPlacement="outside" isRequired label="Email" placeholder="Enter email" type="email" />
                <br />
                <Input variant="underlined" color="secondary" labelPlacement="outside" isRequired label="Password" placeholder="Enter password" type={isVisible ? "text" : "password"} endContent={visible} />
                <br />
                <Button type='submit' color="secondary" className='font-medium' variant="flat"> LOGIN </Button>
                <p className='text-[13px] mt-3'>
                    Don't have an account? &nbsp;
                    <Link color="secondary" className='font-medium' href="/signup"> Sign up </Link>
                </p>
            </form>
        </AuthLayout>
    );
};
