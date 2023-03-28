import React from 'react';
import { View, Text, SectionList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import colors from '../utils/Colors';
import Footer from '../components/Footer';
import Header from '../components/Header';

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

const MenuScreen = () => {
    const renderItem = ({item}) => <Item props={{name: item.name, price: item.price}}/>;
    const renderSectionHeader = ({section: {title}}) => (
        <View style={menuStyles.sectionHeaderContainer}>
            <Text style={menuStyles.sectionHeaderTitle}>{title}</Text>
        </View>
    );
    
    return (
        <KeyboardAvoidingView 
            style={menuStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >   
            <Header text={'Little Lemon'}/>
            <SectionList
                keyExtractor={ (item, index) => item + index }
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                ListFooterComponent={Footer}
                style={{ flex: .9}}
            />
        </KeyboardAvoidingView>
    );
}

const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    item: {
        paddingHorizontal: 40,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: { 
        fontSize: 28, 
        color: colors.brown
    },
    sectionHeaderContainer: {
        backgroundColor: colors.white
    },
    sectionHeaderTitle: {
        color: colors.black,
        fontSize: 34,
        flexWrap: 'wrap',
        textAlign: 'center',
    }
});

export default MenuScreen;
