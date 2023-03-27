import React from 'react';
import { View, Text, FlatList, SectionList, StyleSheet } from 'react-native';
import colors from '../utils/Colors';
import Footer from './Footer';

// const menuItemsToDisplay = [
//     { name: 'Hummus', price: '$5.00', id: '1A' },
//     { name: 'Moutabal', price: '$5.00', id: '2B' },
//     { name: 'Falafel', price: '$7.50', id: '3C' },
//     { name: 'Marinated Olives', price: '$5.00', id: '4D' },
//     { name: 'Kofta', price: '$5.00', id: '5E' },
//     { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
//     { name: 'Lentil Burger', price: '$10.00', id: '7G' },
//     { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
//     { name: 'Kofta Burger', price: '$11.00', id: '9I' },
//     { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
//     { name: 'Fries', price: '$3.00', id: '11K' },
//     { name: 'Buttered Rice', price: '$3.00', id: '12L' },
//     { name: 'Bread Sticks', price: '$3.00', id: '13M' },
//     { name: 'Pita Pocket', price: '$3.00', id: '14N' },
//     { name: 'Lentil Soup', price: '$3.75', id: '15O' },
//     { name: 'Greek Salad', price: '$6.00', id: '16Q' },
//     { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
//     { name: 'Baklava', price: '$3.00', id: '18S' },
//     { name: 'Tartufo', price: '$3.00', id: '19T' },
//     { name: 'Tiramisu', price: '$5.00', id: '20U' },
//     { name: 'Panna Cotta', price: '$5.00', id: '21V' }
// ];

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
];

const Item = ({props}) => (
    <View style={menuStyles.item}>
        <Text style={menuStyles.itemText}>{props.name}</Text>
        <Text style={menuStyles.itemText}>{props.price}</Text>
    </View>
);

// const Sep = () => <View style={menuStyles.sep}/>;

const Header = () => <Text style={menuStyles.title}>View Menu</Text>;

const MenuItems = () => {
    const renderItem = ({item}) => <Item props={{name: item.name, price: item.price}}/>;

    const renderSectionHeader = ({section: {title}}) => (
        <View style={menuStyles.sectionHeaderContainer}>
            <Text style={menuStyles.sectionHeaderTitle}>{title}</Text>
        </View>
    );
    
    return (
        <View style={menuStyles.container}>
            <SectionList
                keyExtractor={ (item, index) => item + index }
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                // ListFooterComponent={Footer}
            />
            {/* <FlatList 
                data={menuItemsToDisplay} 
                keyExtractor={item => item.id} 
                renderItem={renderItem}
                ItemSeparatorComponent={Sep}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
            /> */}
        </View>
    );
}

const menuStyles = StyleSheet.create({
    container: {
        flex: .9,
        alignItems: 'center'
    },
    item: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: { 
        fontSize: 28, 
        color: colors.yellow
    },
    title: { 
        fontSize: 40, 
        flexWrap: 'wrap', 
        color: 'white',
        textAlign: 'center'
    },
    alignLeft: {
        justifyContent: 'flex-start'
    },
    alignRight: {
        justifyContent: 'flex-end'
    },
    sep: {
        borderBottomWidth: 1,
        borderColor: colors.yellow
    },
    sectionHeaderContainer: {
        backgroundColor: colors.yellow
    },
    sectionHeaderTitle: {
        color: colors.black,
        fontSize: 34,
        flexWrap: 'wrap',
        textAlign: 'center',
    }
});

export default MenuItems;
