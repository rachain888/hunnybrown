import React , {useState ,useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  

}));

export default function Menufood() {
  const classes = useStyles();

  const [foods , setFood] = useState ([
    { id : 1 , name: 'Brown Black Tea Boba ( 79 บาท )' , picture: '/images/image2.jpg' , description: 'อยากผ่อนคลายในวันหยุด สั่งเล้ยยย ชาดำรสเข้มข้นจากฮันนี่บราวน์ นอกจากอร่อยดับกระหายเพิ่มความสดชื่นเเล้ว ชาดำ ยังมีสารต่อต้านอนุมูลอิสระอีกด้วยนะ สำหรับใครที่รักสุขภาพ พลาดไม่ได้จริง ๆ ไปเลย ไปลองง หรือจะซื้อไปฝากอากงอาม่าที่บ้านก็ได้นะ', number:0 },
    { id : 2 , name: 'Brown Tea ( 69 บาท )' , picture: '/images/image3.png ' , description: 'เครื่องดื่มพรีเมี่ยมพิถีพิถันในทุกขั้นตอน ตั้งแต่การเลือกใช้สูตรใบชาที่หอมเข้มข้มและความหอมมันด้วยนมแท้ ระดับความหวานที่พอดี ขาดไม่ได้ทีเด็ดที่ไข่มุกเคี้ยวเพลินหนุบหนับเข้ากับชานม ดื่มฟินจนหมดแก้วไม่ทันตั้งตัว!!', number :0},
    { id : 3 , name: 'Brownie ( 49 บาท )' , picture: '/images/image4.jpg' , description: 'สูตรเข้มข้นจาก Hunny Brown ซึ่งบราวนี่ของเรา พี่หมีเลือกใช้เป็นช็อกโกแลตชั้นดี เกรดพรีเมียม รวมไปถึงการผสมผสานของน้ำตาลและแป้งที่มีสัดส่วนพอดี',number:0},
]);
  
  useEffect(() => {
    setFood(foods);
  }, []);
  
  
    
  return (
    <div>
      
      { foods.map((food) => (
        <Card className={classes.root} key={food.name} >
      <CardMedia
      className={classes.media}
      image= {food.picture}
      title="Paella dish"
      />
       <CardContent>
       <Typography variant="h5" gutterBottom>
        {food.name}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {food.description}
       </Typography>
       <ButtonGroup  style={{ margin : "10px 0px 0px 100px"}}> 
    <Button onClick={() => setFood(number - 1)}>-</Button>
    <Button disabled>{food.number}</Button>
       <Button onClick={() => setFood(number + 1)}>+</Button>
      </ButtonGroup>
      </CardContent>
    </Card>
       ))} 
    </div>
  );
}