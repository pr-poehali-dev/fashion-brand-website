import * as LucideIcons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  // Get the icon component by name
  const IconComponent =
    (LucideIcons as any)[name] || (LucideIcons as any)[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, using fallback "${fallback}"`);
    return null;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
