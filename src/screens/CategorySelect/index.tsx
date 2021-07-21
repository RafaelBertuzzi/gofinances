import React from "react";

import {Category, Container, Footer, Header, Icon, Name, Separator, Title} from "./styles";
import {FlatList} from "react-native";
import {categories} from "../../utils/categories";
import {Button} from "../../components/Form/Button";

interface CategoryProps {
    key: string;
    name: string;
}

interface Props {
    category: CategoryProps;
    setCategory: (category: CategoryProps) => void;
    closeSelectCategory: () => void;
}

export function CategorySelect(
    {
        category,
        setCategory,
        closeSelectCategory
    }: Props
) {

    function handleCategorySelect(item: CategoryProps) {
        setCategory(item)
    }

    return (
        <Container>
            <Header>
                <Title>
                    Categorias
                </Title>
            </Header>

            <FlatList
                data={categories}
                style={{flex: 1, width: '100%'}}
                keyExtractor={(item => item.key)}
                ItemSeparatorComponent={() => <Separator />}
                renderItem={({item}) => (
                    <Category
                        onPress={() => handleCategorySelect(item)}
                        isActive={category.key === item.key}
                    >
                        <Icon name={item.icon}/>
                        <Name>{item.name}</Name>
                    </Category>
                )}
            />

            <Footer>
                <Button title={"Selecionar"} onPress={closeSelectCategory} />
            </Footer>
        </Container>
    );
}
