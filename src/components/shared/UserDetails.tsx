"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import updateUserDetails from "@/actions/updateUserDetails";
import { useState } from "react";
type UserDetailsProps = {
  user: User;
  authenticatedUser: User | undefined;
};

export default function UserDetails({
  user,
  authenticatedUser,
}: UserDetailsProps) {
  const isEditable = (authenticatedUser &&
    (authenticatedUser.id === user.id ||
      authenticatedUser.role === "admin")) as Boolean;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-slate-900 text-white rounded-lg shadow-md">
      <h1 className="text-center text-3xl font-bold mb-6">User Profile</h1>
      <div className="space-y-4">
        <EditableField
          label="Name"
          value={user.name ?? "N/A"}
          field="name"
          isEditable={isEditable}
          id={user.id}
        />
        <EditableField
          label="Email"
          value={user.email}
          field="email"
          isEditable={isEditable}
          id={user.id}
        />
        <EditableField
          label="Email Verified"
          value={
            user.emailVerified
              ? user.emailVerified.toISOString()
              : "Not Verified"
          }
          field="emailVerified"
          isEditable={!!authenticatedUser && authenticatedUser.role === "admin"}
          id={user.id}
        />
        {authenticatedUser && authenticatedUser.role === "admin" && (
          <EditableField
            label="Role"
            value={user.role == "admin" ? "admin" : "user"}
            field="role"
            isEditable={isEditable}
            id={user.id}
          />
        )}
        <div>
          <h2 className="text-xl font-semibold">Profile Image:</h2>
          {user.image ? (
            <Image
              src={user.image}
              alt="Profile Image"
              width={50}
              height={50}
              className="mt-2 w-24 h-24 rounded-full"
            />
          ) : (
            <p className="mt-2 p-2 bg-slate-700 rounded">No Image</p>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold">Created At:</h2>
          <p className="mt-2 p-2 bg-slate-700 rounded">
            {user.createdAt.toISOString()}
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Updated At:</h2>
          <p className="mt-2 p-2 bg-slate-700 rounded">
            {user.updatedAt.toISOString()}
          </p>
        </div>
      </div>
      <div className="mt-6 text-center">
        <Link
          href="/app/dashboard"
          className="text-blue-600 hover:text-blue-800"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

type EditableFieldProps = {
  label: string;
  value: string;
  field: string;
  isEditable: Boolean;
  id: string;
};

function EditableField({
  label,
  value,
  field,
  isEditable,
  id,
}: EditableFieldProps) {
  const [fieldValue, setFieldValue] = useState(value);
  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold">{label}:</h2>
        <p className="mt-2 p-2 bg-slate-700 rounded">{value}</p>
      </div>
      {isEditable && (
        <Dialog>
          <DialogTrigger className="ml-4 text-blue-600 hover:text-blue-800">
            Edit
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Edit {label}</DialogTitle>
            <DialogDescription>
              <form
                action={() => {
                  updateUserDetails(id, field, fieldValue);
                }}
              >
                <input
                  type="text"
                  name={field}
                  value={fieldValue}
                  onChange={(e) => {
                    setFieldValue(e.target.value);
                  }}
                  className="mt-2 p-2 border rounded w-full"
                />
                <DialogClose
                  type="submit"
                  className="mt-4 text-white px-4 py-2 rounded bg-slate-950"
                >
                  Save
                </DialogClose>
              </form>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
