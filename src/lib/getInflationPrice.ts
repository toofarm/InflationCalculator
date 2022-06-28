import axios from "axios";
import { months } from "./constants";

// props
type TProps = {
  amount: number;
  comparisonYear: number;
};

type TInflationDataRes = {
  totalAdjustedAmount: number;
  singleUnitConverted: number;
};

const getInflationPrice = async (
  props: TProps
): Promise<TInflationDataRes | null> => {
  try {
    const { amount, comparisonYear } = props;
    const apiUrl =
      "https://www.statbureau.org/calculate-inflation-price-jsonp?jsoncallback=?";
    const end = new Date();
    const month = months[end.getMonth()];
    const date = end.getDate();
    const start = new Date(`${month} ${date}, ${comparisonYear}`);
    const config = {
      params: {
        country: "united-states",
        format: true,
        start,
        end,
        amount: 1,
      },
    };

    const res = await axios(apiUrl, config);

    let num = parseFloat(res.data.split('"')[1].split("$")[1].replace(" ", ""));

    return {
      totalAdjustedAmount: Math.floor(num * amount),
      singleUnitConverted: num,
    };
  } catch (err) {
    console.log(err);
    return null;
  }
};

export default getInflationPrice;
