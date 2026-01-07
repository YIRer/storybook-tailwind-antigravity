import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function GlobalModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Global Modal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Global Modal Example</DialogTitle>
          <DialogDescription>
            This is a global modal component built with Shadcn UI (Radix Dialog) + Tailwind CSS.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <p>
                You can put any content here. This component is reusable and accessible.
            </p>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
