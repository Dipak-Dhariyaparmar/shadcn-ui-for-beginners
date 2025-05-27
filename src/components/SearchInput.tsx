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

// this is a search input component that includes an input field and a search button.
// It uses the Input and Button components from the UI library.
