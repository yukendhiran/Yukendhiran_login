import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card(props) {
	
	
  return (
    <div>
    
      <div 
		style={{ backgroundColor: props.accent }}     
      className=' w-[221.05px] h-[120px] rounded-[20px]'
      >
        <FontAwesomeIcon icon={props.icon} color="black" className='ml-[169px] mt-[20px]' />
        <div className='ml-[25px]  font-sansl font-normal text-[14px] leading-[16.8px]'>{props.title}</div>
        <div className='ml-[25px] mt-[5px] font-sanso font-normal text-[24px] leading-[32.8px]'>{props.count}</div>
      </div>
    </div>
  );
}