import * as React from "react";

import {
  Body1,
  Caption1,
  Card as FluentCard,
  CardHeader,
} from "@fluentui/react-components";
import { FC } from "react";

type PaymentCardProps = {
  className?: string;
  label: string;
  icon?: string;
  size: "small" | "medium" | "large";
  appearance: "secondary" | "primary" | "outline" | "subtle" | "transparent";
};

const PaymentCard: FC<PaymentCardProps> = ({
  className,
  label = "Button",
  size = "medium",
  appearance = "primary",
  icon = "/icontransfer.svg",
}) => {
  return (
    <FluentCard className={className}>
      <CardHeader
        image={<img src={icon} alt="Elvia Atkins avatar picture" />}
        header={
          <Body1>
            <b>Elvia Atkins</b> mentioned you
          </Body1>
        }
        description={<Caption1>5h ago · About us - Overview</Caption1>}
      />
    </FluentCard>
  );
};

export default PaymentCard;
