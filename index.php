<?php 
  // ����URL�Ż���Ӧ��ҳ��
  // ���·��
  header('content-type:text/html; charset=utf8;');


//var_dump($_SERVER);
  // include('./header.html');
  // echo '<div>��ҳ����</div>';
  // include('./footer.html');

  // include����Ƕ����ҳ��

  // ����URL�е������ж��û�������ĸ�ҳ��

  // include('./views/main/login.html');

//REDIRECT_PATH_INFO  5.5 //PATH_INFO 5.4
  // Ĭ��Ŀ¼����
  $dir = 'main';

  // Ĭ���ļ�����
  $filename = 'index';


//var_dump($_SERVER);

  // ����URL�е�·��
  if(array_key_exists('REDIRECT_URL',$_SERVER)){
       // ·������
       // ����·��
       $path = $_SERVER['REDIRECT_URL'];// /main/index
       // ��ȡ�ַ���
       $str = substr($path, 1); // main/index
       // �ָ��ַ���
       $ret = explode('/',$str);
       if(count($ret) == 2){
         // ����·��
         // ����Ĭ��·��
         $dir = $ret[0];
         // ����Ĭ���ļ�����
         $filename = $ret[1];
       }else{
         // �������ͳһ��ת����¼ҳ
         $filename = 'login';
       }
     }
//     if(array_key_exists('REDIRECT_PATH_INFO',$_SERVER)){
//       // ·������
//       // ����·��
//       $path = $_SERVER['REDIRECT_PATH_INFO'];// /main/index
//       // ��ȡ�ַ���
//       $str = substr($path, 0); // main/index
//       // �ָ��ַ���
//       $ret = explode('/',$str);
//       if(count($ret) == 2){
//         // ����·��
//         // ����Ĭ��·��
//         $dir = $ret[0];
//         // ����Ĭ���ļ�����
//         $filename = $ret[1];
//       }else{
//         // �������ͳһ��ת����¼ҳ
//         $filename = 'login';
//       }
//     }
  //include('./views/main/login.html');
//  // Ƕ����ҳ��
 // echo($dir);
//  echo($filename);
////  var_dump($dir);
//  echo $dir;

//  echo './views/'.$dir.'/'.$filename.'.html';
//  include('./views/main/login.html');

  include('./views/'.$dir.'/'.$filename.'.html');


 ?>