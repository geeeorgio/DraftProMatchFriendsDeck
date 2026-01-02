import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import {
  CustomButton,
  CustomContainer,
  CustomIcon,
  CustomScreenWrapper,
  CustomText,
} from 'src/components';
import { type FactType, type FactVariantType } from 'src/constants';
import {
  checkIfPlayerChoiceIsCorrect,
  getRandomFact,
  handleShare,
  shuffleArray,
  shufflePlayersChoices,
} from 'src/utils';

const SecondGameScreen = () => {
  const [fact, setFact] = useState<FactType>(() => getRandomFact());
  const [currentOptions, setCurrentOptions] = useState<FactVariantType[]>([]);
  const [playerChoices, setPlayerChoices] = useState<FactVariantType[]>([]);
  const [isVariantSelected, setIsVariantSelected] = useState(false);

  useEffect(() => {
    setCurrentOptions(() => shuffleArray(fact.variants));
  }, [fact]);

  const handleOptionChoosePress = (selectedOpt: FactVariantType) => {
    if (playerChoices.length === 0) {
      setPlayerChoices([selectedOpt]);
      return;
    }

    const firstChoice = playerChoices[0];

    if (firstChoice.index === selectedOpt.index) {
      setPlayerChoices([]);
      return;
    }

    const newOptions = shufflePlayersChoices(
      currentOptions,
      firstChoice,
      selectedOpt,
    );

    setCurrentOptions(newOptions);

    setPlayerChoices([]);
  };

  const handleSubmitPress = () => {
    setIsVariantSelected(true);

    const result = checkIfPlayerChoiceIsCorrect(currentOptions, fact.variants);

    setCurrentOptions(result);
  };

  const handleNextVariantPress = () => {
    setIsVariantSelected(false);

    let newFact;
    do {
      newFact = getRandomFact();
    } while (newFact.id === fact.id);

    setFact(newFact);
    setPlayerChoices([]);
  };

  const handleSharePress = () => handleShare();

  const getVariantButtonStyle = (opt: FactVariantType) => {
    if (opt.isCorrect) return styles.variantButtonCorrect;
    if (opt.isCorrect === false) return styles.variantButtonIncorrect;
    return undefined;
  };

  return (
    <CustomScreenWrapper extraStyle={styles.container}>
      <View style={styles.contentContainer}>
        <CustomContainer variant="blue" extraStyle={styles.header}>
          <CustomText extraStyle={styles.title}>{fact.question}</CustomText>
        </CustomContainer>

        <View style={styles.variantsContainer}>
          {currentOptions.map((opt) => (
            <CustomButton
              key={`${fact.id}-${opt.index}`}
              variant="black"
              extraStyle={[
                styles.variantButton,
                playerChoices.length > 0 &&
                  playerChoices[0]?.index === opt.index &&
                  styles.variantButtonPressed,
                getVariantButtonStyle(opt),
              ]}
              onPress={() => handleOptionChoosePress(opt)}
              disabled={isVariantSelected}
            >
              <CustomText extraStyle={styles.variantButtonText}>
                {`${opt.text}`} {isVariantSelected && `(${opt.description})`}
              </CustomText>
            </CustomButton>
          ))}
        </View>
      </View>

      {isVariantSelected ? (
        <View style={styles.footer}>
          <CustomButton
            onPress={handleSharePress}
            extraStyle={styles.shareButton}
          >
            <CustomIcon name="share" />
          </CustomButton>
          <CustomButton
            onPress={handleNextVariantPress}
            extraStyle={styles.nextBtn}
          >
            <CustomText extraStyle={styles.nextBtnText}>Next</CustomText>
          </CustomButton>
        </View>
      ) : (
        <CustomButton onPress={handleSubmitPress} extraStyle={styles.submitBtn}>
          <CustomText extraStyle={styles.submitBtnText}>Submit</CustomText>
        </CustomButton>
      )}
    </CustomScreenWrapper>
  );
};

export default SecondGameScreen;
