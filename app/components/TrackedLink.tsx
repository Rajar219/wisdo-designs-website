"use client";

import Link from "next/link";
import { trackEvent, AnalyticsEventName } from "../lib/analytics";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  eventName: AnalyticsEventName;
  eventPayload?: Record<string, string>;
  isExternal?: boolean;
}

export default function TrackedLink({ 
  href, 
  eventName, 
  eventPayload, 
  isExternal,
  className,
  children,
  ...props 
}: TrackedLinkProps) {
  
  const handleClick = () => {
    trackEvent(eventName, eventPayload);
  };

  if (isExternal || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel") || href.startsWith("/api")) {
    return (
      <a href={href} className={className} onClick={handleClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
