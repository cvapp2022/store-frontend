import { useState } from 'react';
import {useSelector} from "react-redux";
import { selectApplicationState } from '../../store/appSlice';
import { Card, Dropdown, DropdownButton } from 'react-bootstrap';


export default function mainCategoryList() { 

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const applicationState = useSelector(selectApplicationState);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isHovered, setIsHovered] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isClicked, setIsClicked] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [hoverd, setHoverd] = useState('');
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isSubHovered, setIsSubHovered] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [subHoverd, setSubHoverd] = useState('');

    return (
        <>
            <Card className="d-flex flex-column align-items-end h-100">
                {applicationState.application.categories.map((category) => ( 
                    <DropdownButton
                        key={category.id}
                        id={`dropdown-button-drop-${category.id}`}
                        drop="end"
                        variant="link"
                        title={`${category.title} `}
                        onMouseEnter={() => {
                            setIsHovered(true)
                            setHoverd(category.title)
                        }}
                        onMouseLeave={() => {
                            setIsHovered(false)
                            setHoverd('')
                        }}
                        onToggle={() => setIsClicked(!isClicked)}
                        show={isClicked || isHovered && hoverd===category.title }
                    >
                        <Dropdown.Item eventKey="1">
                            <DropdownButton
                                key='sub'
                                id={`dropdown-button-drop-sub`}
                                drop="end"
                                variant="link"
                                title={`sub   dropdown   `}
                                onMouseEnter={() => {
                                    setIsSubHovered(true)
                                    setSubHoverd('sub')
                                }}
                                onMouseLeave={() => {
                                    setIsSubHovered(false)
                                    setSubHoverd('')
                                }}
                                onToggle={() => setIsClicked(!isClicked)}
                                show={isClicked || isSubHovered && subHoverd==='sub' }
                            >
                                <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                            </DropdownButton>
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                    </DropdownButton>
                ))}  

            </Card>

        </>
        


    );


}