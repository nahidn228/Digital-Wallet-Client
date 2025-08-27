/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { toast } from "sonner";

import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { useUpdateUserInfoMutation } from "@/redux/features/user/user.api";

interface UpdateProfileForm {
  name: string;
  email: string;
  phone: string;
  role: "User" | "Agent" | "Admin";
  password?: string;
  profilePicture?: string;
  nid?: string;
  address?: string;
  dateOfBirth?: string | Date;
}

export function UpdateProfileForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { data, isLoading } = useUserInfoQuery(undefined);
  const [updateUser] = useUpdateUserInfoMutation();
  const user = data?.data;

  const form = useForm({
    defaultValues: {
      name: "",
      address: "",
      dateOfBirth: "",
      nid: "",
    },
  });

  const email = user?.email;



  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Updating profile...");

    try {
      const result = await updateUser({ email, ...data }).unwrap();
      console.log(result);

      if (result.success)
        toast.success("Profile updated successfully", { id: toastId });
    } catch (error: any) {
      console.error(error);
      toast.error(error.message || "Update failed", { id: toastId });
    }
  };

  useEffect(() => {
    if (user) {
      form.reset({
        name: user?.name || "",
        address: user?.address || "",
        dateOfBirth: user?.dateOfBirth
          ? new Date(user.dateOfBirth).toISOString().split("T")[0]
          : "",
        nid: user?.nid || "",
      });
    }
  }, [form, user]);

  if (isLoading) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 ">
          <Form {...form}>
            <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Update Profile</h1>
                  <p className="text-muted-foreground text-balance">
                    Change your information below
                  </p>
                </div>

                {/* Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Name</Label>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Address */}
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Address</Label>
                      <FormControl>
                        <Input
                          placeholder="Address"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Date Of Birth */}
                <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Date Of Birth</Label>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* National Id */}
                <FormField
                  control={form.control}
                  name="nid"
                  render={({ field }) => (
                    <FormItem>
                      <Label>NID</Label>
                      <FormControl>
                        <Input {...field} value={field.value || ""} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Update
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
