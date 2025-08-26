import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllUserQuery } from "@/redux/features/user/user.api";
import { ChevronFirst, ChevronLast, Trash2 } from "lucide-react";

interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

const AllUser = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  const { data, refetch } = useGetAllUserQuery({
    page,
    limit: 5,
    role: filterType === "all" ? null : filterType,

    type: filterType || undefined,
    search: searchQuery || undefined,
  });

  const users = data?.data?.users;
  const total = data?.data?.total || 0;
  const totalPages = Math.ceil(total / 5);

  // Refetch on filters change
  useEffect(() => {
    setPage(1);
    refetch();
  }, [filterType, refetch]);

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold  lg:text-4xl">
            All D.<span className="text-primary">Wallet </span> Members
          </h2>
        </div>
        {/* Filters */}
        <div className="flex gap-2 mb-4 flex-col md:flex-row">
          <Input
            value={searchQuery}
            placeholder="Search by ID, type, status, or email"
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1"
          />
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
              <SelectItem value="User">User</SelectItem>
              <SelectItem value="Agent">Agent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="bg-background overflow-hidden rounded-md border min-h-80">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Verified Status</TableHead>
                <TableHead>Active Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users?.map((user: IUser) => (
                <TableRow key={user._id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    {user.isVerified ? "Verified" : "Not Verified"}
                  </TableCell>
                  <TableCell>{user.isActive ? "Active" : "Inactive"}</TableCell>
                  <TableCell>
                    <Button variant="destructive" size="icon">
                      <Trash2 />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <Button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <ChevronFirst /> Prev
          </Button>
          <span>
            Page {page} of {totalPages || 1}
          </span>
          <Button
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next <ChevronLast />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AllUser;
