export interface IBaseInterface {
  sampleTextProp: string;
}
const BaseTemplate = ({ sampleTextProp }: IBaseInterface) => {
  return <div>{sampleTextProp}</div>;
};

export default BaseTemplate;
