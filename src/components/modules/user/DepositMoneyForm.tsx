import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { toast } from "sonner";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useDepositMutation } from "@/redux/features/Transaction/transaction.api";


export function DepositMoneyForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { data } = useUserInfoQuery(undefined);
  const [depositMoney] = useDepositMutation();

  const userEmail = data?.data?.email;
  // const userRole = data?.data?.role;

  const form = useForm({
    defaultValues: {
      receiverEmail: "",
      amount: 0,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Money Sending...");

    const depositMoneyData = {
      senderEmail: userEmail,
      receiverEmail: data.receiverEmail.trim(),
      amount: Number(data.amount),
    };

    // if (userRole !== role.agent) {
    //   toast.error("You do not have permission to do this action", {
    //     id: toastId,
    //   });
    // }

    try {
      const res = await depositMoney(depositMoneyData).unwrap();
      console.log(res);

      if (res.success) {
        toast.success(`${data.amount} Taka Deposit Successfully`, {
          id: toastId,
        });
      }
      form.reset();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      toast.error("Something Went Wrong", { id: toastId });
    }
  };

  return (
    <div
      className={cn(" max-w-xl mx-auto  justify-center", className)}
      {...props}
    >
      <Card className="overflow-hidden p-0">
        <CardContent className="">
          <Form {...form}>
            <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Deposit Money</h1>
                  <p className="text-muted-foreground text-sm"></p>
                </div>

                {/* Email */}
                <FormField
                  control={form.control}
                  name="receiverEmail"
                  render={({ field }) => (
                    <FormItem className="grid gap-1">
                      <Label htmlFor="email">Receiver Email</Label>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password */}
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="grid gap-1">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="amount">Amount</Label>
                      </div>
                      <FormControl>
                        <Input type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
