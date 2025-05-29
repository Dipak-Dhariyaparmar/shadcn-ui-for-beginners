import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

type Props = {
  placeholder?: string;
};

export function SearchInput({ placeholder }: Props) {
  return (
    <div className="border rounded-lg flex justify-between items-center">
      <Input
        type="text"
        placeholder={placeholder || "Search"}
        className="border-none"
      />
      <Button variant="ghost" size="icon">
        <Search />
        <span className="sr-only">Search Button</span>
      </Button>
    </div>
  );
}

// this component is used to create a search input with a button
// it uses the Input and Button components from the ui folder
// the Input component is used to create the input field
