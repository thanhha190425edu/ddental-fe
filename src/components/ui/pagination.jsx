import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button";

const Pagination = ({
  className,
  ...props
}) => (
  <nav
    role="navigation"
<<<<<<< HEAD
    aria-label="Phân trang"
=======
    aria-label="pagination"
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props} />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props} />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(buttonVariants({
      variant: isActive ? "outline" : "ghost",
      size,
    }), className)}
    {...props} />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ...props
}) => (
  <PaginationLink
<<<<<<< HEAD
    aria-label="Chuyển đến trang trước"
=======
    aria-label="Go to previous page"
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}>
    <ChevronLeft className="h-4 w-4" />
<<<<<<< HEAD
    <span>Trước</span>
=======
    <span>Previous</span>
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ...props
}) => (
  <PaginationLink
<<<<<<< HEAD
    aria-label="Chuyển đến trang sau"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}>
    <span>Sau</span>
=======
    aria-label="Go to next page"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}>
    <span>Next</span>
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}>
    <MoreHorizontal className="h-4 w-4" />
<<<<<<< HEAD
    <span className="sr-only">Thêm trang</span>
=======
    <span className="sr-only">More pages</span>
>>>>>>> 815a6b25c30d0ce2b8a9d66a6dc5f1bb389afc2c
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}
