"use client"

import { Button } from "@/components/ui/button";
import { UserRole } from "@prisma/client";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { toast } from "sonner";
import { admin } from "@/actions/admin";

const AdminPage = () => {
  const onServerActionClick = () =>{
    admin()
      .then((data)=>{
        if(data.error){
          toast.error(data.error);
        };
        if(data.success){
          toast.success(data.success);
        };
      })
  }

  const onApiRouteClick = () => {
    fetch("/api/admin")
      .then((response) => {
        if (response.ok) {
          toast.success("Allowed API Route!");
        } else {
          toast.error("Forbidden API Route!");
        }
      })
  }

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          🔑 Admin
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are now an admin" />
        </RoleGate>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Admin only API Route
          </p>
          <Button onClick={onApiRouteClick}>
            Clcik to test
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
          <p className="text-sm font-medium">
            Admin only Server Action
          </p>
          <Button onClick={onServerActionClick}>
            Clcik to test
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default AdminPage;