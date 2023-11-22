import { IconButton } from "vcc-ui";

import styles from "../../public/css/components/paginationDesktop.module.css";


interface PaginationDesktopProps {  
    onClickleft:() => void;
    onClickRight:() => void;
}

export default function PaginationDesktop({onClickleft, onClickRight} : PaginationDesktopProps){
    return(
        <div className={styles.btnWapper}>
            <IconButton variant="outline" onClick={onClickleft} aria-label="esquerda" iconName="navigation-chevronback"/>
            <IconButton variant="outline" onClick={onClickRight} aria-label="direita" iconName="navigation-chevronforward"/>
        </div>
    )
}   