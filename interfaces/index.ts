export type ButtonProps = {
    label: string,
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
};

export type CardProps = {
    title: string;
    description: string;
    image?: string;
};