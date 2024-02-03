import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Post } from "@/types";
import { MouseEventHandler } from "react";

interface SidebarCategoriesProps {
    setNextJS: boolean;
}

const SidebarCategories: React.FC<SidebarCategoriesProps> = ({
    setNextJS,
}) => {
    return ( 
        <div className="flex flex-wrap gap-2">
            {/* <Button onClick={() => setNextJS(true)}>NextJS</Button> */}
        </div>
     );
}
 
export default SidebarCategories;