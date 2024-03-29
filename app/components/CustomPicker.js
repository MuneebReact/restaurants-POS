import React from 'react';
import {View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
const CustomPicker = ({
  data,
  onSelect,
  defaultButtonText,
  buttonTextAfterSelection,
  rowTextForSelection,
  defaultValue,
  defaultValueByIndex,
  disabled,
  disableAutoScroll,
  onFocus,
  onBlur,
  buttonStyle,
  buttonTextStyle,
  renderCustomizedButtonChild,
  renderDropdownIcon,
  dropdownIconPosition,
  statusBarTranslucent,
  dropdownStyle,
  dropdownOverlayColor,
  dropdownBackgroundColor,
  rowStyle,
  rowTextStyle,
  selectedRowStyle,
  selectedRowTextStyle,
  renderCustomizedRowChild,
  search,
  searchInputStyle,
  searchInputTxtColor,
  searchPlaceHolder,
  searchPlaceHolderColor,
  renderSearchInputLeftIcon,
  renderSearchInputRightIcon,
  ForwardRef,
}) => {
  return (
    <SelectDropdown
      ref={ForwardRef}
      data={data}
      onSelect={onSelect}
      defaultButtonText={defaultButtonText}
      buttonTextAfterSelection={buttonTextAfterSelection}
      rowTextForSelection={rowTextForSelection}
      defaultValue={defaultValue}
      defaultValueByIndex={defaultValueByIndex}
      disabled={disabled}
      disableAutoScroll={disableAutoScroll}
      onFocus={onFocus}
      onBlur={onBlur}
      buttonStyle={buttonStyle}
      buttonTextStyle={buttonTextStyle}
      renderCustomizedButtonChild={renderCustomizedButtonChild}
      renderDropdownIcon={renderDropdownIcon}
      dropdownIconPosition={dropdownIconPosition}
      statusBarTranslucent={statusBarTranslucent}
      dropdownStyle={dropdownStyle}
      dropdownOverlayColor={dropdownOverlayColor}
      dropdownBackgroundColor={dropdownBackgroundColor}
      rowStyle={rowStyle}
      rowTextStyle={rowTextStyle}
      selectedRowStyle={selectedRowStyle}
      selectedRowTextStyle={selectedRowTextStyle}
      renderCustomizedRowChild={renderCustomizedRowChild}
      search={search}
      searchInputStyle={searchInputStyle}
      searchInputTxtColor={searchInputTxtColor}
      searchPlaceHolder={searchPlaceHolder}
      searchPlaceHolderColor={searchPlaceHolderColor}
      renderSearchInputLeftIcon={renderSearchInputLeftIcon}
      renderSearchInputRightIcon={renderSearchInputRightIcon}
    />
  );
};
export default CustomPicker;
