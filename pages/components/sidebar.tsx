import NextImage from "next/image";
import { MdHome, MdSearch, MdLibraryMusic, MdFavorite } from "react-icons/md";
import {
    List,
    Box,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay,
} from "@chakra-ui/layout";

const Sidebar = () => {
    return (
        <Box width="100%" height="calc(100vh - 100px)" bg="black" paddingX="5px" color="gray">
            <Box paddingY="20px">
                <Box width="120px" marginBottom="20px" paddingX="20px">
                    <NextImage src="/logo.svg" height={60} width={120} />
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
