import { Button, Chip, Input, Tooltip } from "@heroui/react";
import AuthLayout from "./AuthLayout";
import ProfilePhotoSelector from "@/components/Input/ProfilePhotoSelector";
import { ProjectInfo } from "@/config/info";
import usePasswordVisibility from "@/utils/utils";

export default function SignupPage() {
    const { isVisible, VisibilityToggle } = usePasswordVisibility();

    const help = (
        <div>
            {ProjectInfo.map(({ title, subtitle }, index) =>
                <div key={index}>
                    <strong> {title}: </strong> {subtitle}.
                </div>
            )}
        </div>
    );

    return (
        <AuthLayout>
            <form>
                <div className="flex space-x-20">
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <Input variant="underlined" color="secondary" labelPlacement="outside" isRequired label="Email" placeholder="Enter email" type="email" />
                        <Input variant="underlined" color="secondary" labelPlacement="outside" isRequired label="Full Name" placeholder="Enter full name" type="text" />
                        <Input variant="underlined" color="secondary" labelPlacement="outside" isRequired label="Password" placeholder="Enter password" type={isVisible ? "text" : "password"} endContent={VisibilityToggle} />
                        <div className="flex flex-col space-y-2">
                            <p className="text-sm"> Know more </p>
                            <Tooltip showArrow className="w-[75%]" color="secondary" placement="bottom-start" content={help}>
                                <Chip size="sm" color="secondary" variant="flat">
                                    What is the purpose of this?
                                </Chip>
                            </Tooltip>
                        </div>
                    </div>
                    <ProfilePhotoSelector image={null} setImage={() => { }} />
                </div>
                <br />
                <Button type='submit' color="secondary" className='font-medium' variant="flat"> SIGN UP </Button>
            </form>
        </AuthLayout>
    );
};
