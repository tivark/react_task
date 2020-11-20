const findOption = (requestOptions, optionId) => {
  for(let key in requestOptions){
    if(requestOptions[key].optionsID.includes(optionId)){
      return (requestOptions[key].options.filter((option) =>{
        return option.id === optionId;
      })[0]);
    }
  }
  return null;
}

const getParamFromOptions = (requestOptions, selectedOptions) =>{
  const option = findOption(requestOptions, 'option-2');
  if(selectedOptions['option-2'].length === option.variants.length){
    return ''
  }

  switch (selectedOptions['option-2'][0]){
    case 'w_abv':
      return 'abv_gt=1'
    case 'wo_abv':
      return 'abv_lt=1'
    default:
      return ''
  }
}

export default getParamFromOptions;