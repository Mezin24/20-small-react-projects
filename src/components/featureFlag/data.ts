export const featureFlagData = {
  accordion: false,
  colorGenerator: true,
  slider: false,
  starRating: true,
  ticTacToe: true,
};

export const featureFlagDataFetching = async () => {
  try {
    const response = await new Promise((resolve) => {
      setTimeout(() => resolve(featureFlagData), 500);
    });
    return response;
  } catch (error) {
    console.log('No data');
  }
};
