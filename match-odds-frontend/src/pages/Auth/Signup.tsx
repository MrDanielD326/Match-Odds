import usePasswordVisibility from "@/components/Icons/iconLinks";
import ProfilePhotoSelector from "@/components/Input/ProfilePhotoSelector";
import { ProjectInfo } from "@/config/info";
import AuthLayout from "@/layouts/AuthLayout";
import { Button, Chip, Input, Tooltip } from "@heroui/react";

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

    const infoChip = () => (
        <Tooltip showArrow color="secondary" placement="bottom" content={help}>
            <Chip size="md" color="secondary" variant="solid"> What is the purpose of this App? </Chip>
        </Tooltip>
    );

    return (
        <AuthLayout>
            <form>
                <div className="flex space-x-5">
                    <div className="grid grid-rows-1 md:grid-rows-2 gap-6">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Input variant="flat" color="default" labelPlacement="outside" isRequired label="Email" placeholder="Enter your email" type="email" />
                            <Input variant="flat" color="default" labelPlacement="outside" isRequired label="Name" placeholder="Enter your full name" type="text" />
                        </div>
                        <Input variant="flat" color="default" labelPlacement="outside" isRequired label="Password" placeholder="Enter your password" type={isVisible ? "text" : "password"} endContent={VisibilityToggle} />
                    </div>
                    <div>
                        <ProfilePhotoSelector image={null} setImage={() => { }} />
                        {infoChip()}
                    </div>
                </div>
                <br />
                <Button type='submit' color="secondary" className='font-medium' variant="solid"> SIGN UP </Button>
            </form>
        </AuthLayout>
    );
};
