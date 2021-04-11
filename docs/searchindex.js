Search.setIndex({docnames:["dialogy","dialogy.cli","dialogy.constants","dialogy.errors","dialogy.parser","dialogy.parser.text","dialogy.parser.text.entity","dialogy.plugin","dialogy.postprocess","dialogy.postprocess.text","dialogy.postprocess.text.slot_filler","dialogy.postprocess.text.voting","dialogy.preprocess","dialogy.preprocess.text","dialogy.types","dialogy.types.entity","dialogy.types.intent","dialogy.types.plugin","dialogy.types.signal","dialogy.types.slots","dialogy.types.utterances","dialogy.utils","dialogy.workflow","index","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["dialogy.rst","dialogy.cli.rst","dialogy.constants.rst","dialogy.errors.rst","dialogy.parser.rst","dialogy.parser.text.rst","dialogy.parser.text.entity.rst","dialogy.plugin.rst","dialogy.postprocess.rst","dialogy.postprocess.text.rst","dialogy.postprocess.text.slot_filler.rst","dialogy.postprocess.text.voting.rst","dialogy.preprocess.rst","dialogy.preprocess.text.rst","dialogy.types.rst","dialogy.types.entity.rst","dialogy.types.intent.rst","dialogy.types.plugin.rst","dialogy.types.signal.rst","dialogy.types.slots.rst","dialogy.types.utterances.rst","dialogy.utils.rst","dialogy.workflow.rst","index.rst","modules.rst"],objects:{"":{dialogy:[0,0,0,"-"]},"dialogy.cli":{main:[1,1,1,""],project:[1,0,0,"-"]},"dialogy.cli.project":{new_project:[1,1,1,""]},"dialogy.constants":{EntityKeys:[2,2,1,""],SIGNAL:[2,2,1,""]},"dialogy.constants.EntityKeys":{BODY:[2,3,1,""],DIM:[2,3,1,""],DURATION:[2,3,1,""],END:[2,3,1,""],FROM:[2,3,1,""],GRAIN:[2,3,1,""],INTERVAL:[2,3,1,""],LATENT:[2,3,1,""],ORIGIN:[2,3,1,""],RANGE:[2,3,1,""],SLOT_NAMES:[2,3,1,""],START:[2,3,1,""],TO:[2,3,1,""],TYPE:[2,3,1,""],UNIT:[2,3,1,""],VALUE:[2,3,1,""],VALUES:[2,3,1,""]},"dialogy.constants.SIGNAL":{NAME:[2,3,1,""],REPRESENTATION:[2,3,1,""],STRENGTH:[2,3,1,""]},"dialogy.parser":{text:[5,0,0,"-"]},"dialogy.parser.text":{entity:[6,0,0,"-"]},"dialogy.parser.text.entity":{duckling_parser:[6,0,0,"-"]},"dialogy.parser.text.entity.duckling_parser":{DucklingParser:[6,2,1,""]},"dialogy.parser.text.entity.duckling_parser.DucklingParser":{plugin:[6,4,1,""]},"dialogy.plugin":{plugin:[7,0,0,"-"]},"dialogy.plugin.plugin":{Plugin:[7,2,1,""]},"dialogy.postprocess":{text:[9,0,0,"-"]},"dialogy.postprocess.text":{slot_filler:[10,0,0,"-"],voting:[11,0,0,"-"]},"dialogy.postprocess.text.slot_filler":{rule_slot_filler:[10,0,0,"-"]},"dialogy.postprocess.text.slot_filler.rule_slot_filler":{RuleBasedSlotFillerPlugin:[10,2,1,""]},"dialogy.postprocess.text.slot_filler.rule_slot_filler.RuleBasedSlotFillerPlugin":{filler:[10,4,1,""]},"dialogy.postprocess.text.voting":{intent_voting:[11,0,0,"-"]},"dialogy.postprocess.text.voting.intent_voting":{VotePlugin:[11,2,1,""],adjust_signal_strength:[11,1,1,""]},"dialogy.postprocess.text.voting.intent_voting.VotePlugin":{plugin:[11,4,1,""],vote_signal:[11,4,1,""]},"dialogy.preprocess":{text:[13,0,0,"-"]},"dialogy.preprocess.text":{merge_asr_output:[13,0,0,"-"],normalize_utterance:[13,0,0,"-"]},"dialogy.preprocess.text.merge_asr_output":{merge_asr_output:[13,1,1,""],merge_asr_output_plugin:[13,1,1,""]},"dialogy.preprocess.text.normalize_utterance":{dict_get:[13,1,1,""],is_each_element:[13,1,1,""],is_list:[13,1,1,""],is_list_of_string:[13,1,1,""],is_string:[13,1,1,""],is_unsqueezed_utterance:[13,1,1,""],is_utterance:[13,1,1,""],normalize:[13,1,1,""]},"dialogy.types":{entity:[15,0,0,"-"],intent:[16,0,0,"-"],plugin:[17,0,0,"-"],signal:[18,0,0,"-"],slots:[19,0,0,"-"],utterances:[20,0,0,"-"]},"dialogy.types.entity":{base_entity:[15,0,0,"-"],dimension_entity_map:[15,5,1,""],duration_entity:[15,0,0,"-"],location_entity:[15,0,0,"-"],numerical_entity:[15,0,0,"-"],people_entity:[15,0,0,"-"],time_entity:[15,0,0,"-"],time_interval_entity:[15,0,0,"-"],utils:[15,0,0,"-"]},"dialogy.types.entity.base_entity":{BaseEntity:[15,2,1,""],entity_synthesis:[15,1,1,""]},"dialogy.types.entity.base_entity.BaseEntity":{add_parser:[15,4,1,""],copy:[15,4,1,""],entity_type:[15,3,1,""],from_dict:[15,4,1,""],get_value:[15,4,1,""],json:[15,4,1,""],set_value:[15,4,1,""],validate:[15,4,1,""],value:[15,3,1,""]},"dialogy.types.entity.duration_entity":{DurationEntity:[15,2,1,""]},"dialogy.types.entity.duration_entity.DurationEntity":{entity_type:[15,3,1,""],value:[15,3,1,""]},"dialogy.types.entity.location_entity":{LocationEntity:[15,2,1,""]},"dialogy.types.entity.location_entity.LocationEntity":{entity_type:[15,3,1,""],value:[15,3,1,""]},"dialogy.types.entity.numerical_entity":{NumericalEntity:[15,2,1,""]},"dialogy.types.entity.numerical_entity.NumericalEntity":{entity_type:[15,3,1,""],value:[15,3,1,""]},"dialogy.types.entity.people_entity":{PeopleEntity:[15,2,1,""]},"dialogy.types.entity.people_entity.PeopleEntity":{entity_type:[15,3,1,""],value:[15,3,1,""]},"dialogy.types.entity.time_entity":{TimeEntity:[15,2,1,""]},"dialogy.types.entity.time_entity.TimeEntity":{dim:[15,3,1,""],entity_type:[15,3,1,""],value:[15,3,1,""]},"dialogy.types.entity.time_interval_entity":{TimeIntervalEntity:[15,2,1,""]},"dialogy.types.entity.time_interval_entity.TimeIntervalEntity":{dim:[15,3,1,""],entity_type:[15,3,1,""],origin:[15,3,1,""],set_value:[15,4,1,""],value:[15,3,1,""]},"dialogy.types.entity.utils":{traverse_dict:[15,1,1,""],validate_type:[15,1,1,""]},"dialogy.types.intent":{Intent:[16,2,1,""]},"dialogy.types.intent.Intent":{add_parser:[16,4,1,""],apply:[16,4,1,""],cleanup:[16,4,1,""],fill_slot:[16,4,1,""],json:[16,4,1,""]},"dialogy.types.signal":{signal:[18,0,0,"-"]},"dialogy.types.slots":{Slot:[19,2,1,""]},"dialogy.types.slots.Slot":{add:[19,4,1,""],clear:[19,4,1,""],json:[19,4,1,""]},"dialogy.utils":{logger:[21,0,0,"-"]},"dialogy.utils.logger":{change_log_level:[21,1,1,""]},"dialogy.workflow":{workflow:[22,0,0,"-"]},"dialogy.workflow.workflow":{Workflow:[22,2,1,""]},"dialogy.workflow.workflow.Workflow":{flush:[22,4,1,""],inference:[22,4,1,""],load_model:[22,4,1,""],postprocess:[22,4,1,""],preprocess:[22,4,1,""],run:[22,4,1,""],update:[22,4,1,""]},dialogy:{cli:[1,0,0,"-"],constants:[2,0,0,"-"],errors:[3,0,0,"-"],parser:[4,0,0,"-"],plugin:[7,0,0,"-"],postprocess:[8,0,0,"-"],preprocess:[12,0,0,"-"],types:[14,0,0,"-"],utils:[21,0,0,"-"],workflow:[22,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:data"},terms:{"338":6,"639":6,"6th":15,"8000":6,"abstract":[7,22],"case":[6,11,13,16,22],"class":[2,6,7,10,11,15,16,19,22],"const":13,"default":[1,6,11,13,15],"final":22,"float":[6,11,13,15,16],"function":[1,6,7,11,13,15,16,21,22],"import":[2,6,13,15,16,17,19,20,21,22],"int":[11,15,16],"long":11,"new":1,"return":[1,6,10,11,13,15,19,22],"true":[11,13,16],"while":15,For:22,Its:15,Not:10,One:[21,22],That:13,The:[1,6,7,11,13,15,22],There:[6,15,16],These:15,Use:15,Uses:22,__call__:6,__init__:[1,16],__postprocessor:22,__preprocessor:22,__valid:15,_oos_:11,_plugin:7,_what:22,_why:22,abort:1,about:6,access:[6,7,10,11,13,15,17,21],across:6,action:[10,16],action_slot:10,adapt:13,add:[15,19],add_pars:[15,16],addit:10,address:[6,15],adjust:11,adjust_signal_strength:11,advanc:22,against:22,aggregate_fn:11,algorithm:11,all:[6,15,19,22],allow:10,alpha2:6,alreadi:1,also:6,altern:[11,13,20],alternative_index:[15,16],ani:[1,6,7,10,11,13,15,16,19,22],anticip:22,api:6,appli:[13,15,16],appropri:22,arbitrari:[13,15,22],arg:[10,11,13,15,16,21,22],argument:[13,22],arrang:10,artifact:6,asia:6,asr:[11,13],assert:15,assist:[10,13],associ:[10,16],atleast:11,attempt:11,attribut:[15,16,22],avail:[6,15],bad:22,base:[2,6,7,10,11,15,16,19,22],base_ent:[0,14,16,19],base_entity_prop:2,baseent:[6,10,15,16,19],becaus:[6,22],been:22,befor:13,being:[7,15],best:[11,13],between:[10,15],beyond:11,bit:10,bloat:15,bodi:[2,15,16],bool:[10,11,13,15,16,22],boost:11,booster:11,both:15,build:22,call:6,callabl:[6,7,10,11,13,15,16,22],can:[6,7,10,11,15,16,19,22],candid:11,categori:10,certain:[6,10,13],challeng:22,chanc:15,chang:[21,22],change_log_level:21,check:[6,10,13,15,22],children:15,choic:22,classifi:[10,11],classmethod:15,cleanup:16,clear:19,cli:[0,23,24],closur:13,cls:15,code:6,collat:22,collect:15,com:[6,10,13],combin:13,command:1,compat:[10,15],compli:15,complianc:15,concaten:13,conceal:15,confid:[11,22],configur:10,connect:6,consensu:11,consid:11,consider:[11,22],consist:6,constant:[0,23,24],constitu:11,constraint:22,contain:[10,15,16],content:[23,24],contextu:11,conveni:[7,22],convent:7,convert:[15,16,19],copi:[1,15],copier:1,correspond:22,could:[11,22],count:11,counterpart:11,countri:6,coupl:[15,22],cover:15,creat:[1,6,7,13,15,16],critic:21,currenc:6,current:[1,10,19,22],dampen:11,data:[1,6,15],databas:6,dataset:1,date:[6,15],datetim:15,debug:[11,15,16,21,22],decemb:15,decid:11,decis:22,deep:15,deepli:15,def:6,defin:[6,10,15,17],definit:[16,19],deliber:22,denot:15,depend:22,deploi:6,describ:15,design:[10,11,22],desir:22,destination_path:1,dialog:[10,22],dict:[6,10,13,15,16,19],dict_:15,dict_get:13,dict_travers:15,dictionari:[15,16,19],differ:[6,7,15,16,22],dim:[2,15],dimens:[6,15],dimension_entity_map:15,dir:1,directli:[7,22],directori:1,doc:16,doe:10,doesn:15,don:7,down:6,drop:11,duckl:[6,15],duckling_ent:6,duckling_pars:[4,5],duckling_plugin:6,ducklingpars:6,durat:[2,6,15],duration_ent:[0,14],durationent:15,each:[10,11,13,15],eas:11,either:15,elect:11,element:[13,15,22],elimin:22,els:11,emit:11,en_gb:6,en_in:6,en_u:6,end:[2,7,13],enforc:22,english:10,entiti:[0,4,5,10,14,16,19,22],entity_synthesi:15,entity_typ:[10,15],entitykei:2,environ:22,error:[0,21,23,24],especi:6,etc:[6,22],evalu:11,even:10,evid:11,exampl:[1,6,7,13,15],except:[15,21],exclus:15,exhibit:[1,22],exist:1,expect:[6,7,11,13,15,22],experi:6,explor:16,expos:[1,6],express:6,extra:6,extract:[6,10,19,22],facebook:6,fairli:22,fallback:11,fallback_int:11,fals:[10,11,15,16,22],faq:10,few:[7,10],field:6,file:1,fill:[10,16,19,22],fill_multipl:[10,16],fill_slot:16,filler:10,filter:[11,15,22],find:22,flavor:15,flexibl:22,flight:15,flush:22,follow:22,food:22,forest:11,fork:6,form:13,format:[6,10],found:10,free:6,frequenc:11,from:[1,2,6,11,15,22],from_dict:15,gener:[1,11],geographi:6,geopointent:15,get:[6,13,15,22],get_valu:15,getworkflowutterancefn:[13,17],github:[6,13],given:[1,7,13,15],goal:22,goe:11,grain:[2,15],guid:6,handl:[10,11,15],has:[11,15,16],have:[6,10,15,22],healthi:11,hello:[1,13],help:[1,6,11,15,16],here:[1,6,11,22],heurist:11,high:11,hold:16,html:[7,10,13,15,16,22],http:[6,10,13],ideal:[11,22],ident:13,identifi:[10,15,16,22],ids:[6,15],imper:6,implement:[6,15,22],impli:11,improv:11,includ:15,index:23,indexerror:15,infer:22,info:[6,21],inform:[11,15,18,22],input:[6,10,11,13,15,22],input_:[6,13,22],insert:[6,7,19],instal:1,instanc:[6,11,15,16,19,22],instanti:6,instead:[15,21],intend:15,intent:[0,10,11,14],intent_detection_slot_fil:10,intent_nam:10,intent_vot:[8,9],interact:7,interfac:6,interv:[2,15],invoc:1,invok:6,irrespect:10,is_each_el:13,is_list:13,is_list_of_str:13,is_str:13,is_unsqueezed_utter:13,is_utter:13,isn:[6,22],iso3166:6,iso:6,issu:[6,13],item:[10,22],item_slot:10,iter:22,its:[6,10,11,15],join:13,json:[13,15,16,19],just:6,kei:[6,7,13,15,19,22],keyerror:[13,15],know:13,kolkata:6,lambda:[6,13],lambdax:13,languag:[6,22],latent:[2,15],latitud:15,lead:15,learn:[11,22],leav:13,level:21,light:22,like:[6,10],line:[1,6],link:1,lint:1,list:[6,10,11,13,15,16,19,22],load:22,load_model:22,local:6,locat:[1,15,22],location_ent:[0,14],locationent:[10,15],log:21,logger:[0,24],logic:15,longitud:15,look:10,low:22,machin:22,made:11,mai:[10,11,13,22],main:[1,22],make:[1,6,13,22],map:10,mark:13,match:[6,10,11,13,15],mayb:16,maybe_utter:13,mean:[6,11,16],meant:[15,22],merg:13,merge_asr_output:[0,12],merge_asr_output_plugin:13,meta:15,method:[6,15,22],metric:1,mismatch:15,miss:[1,13,15,22],model:[1,13,22],modif:7,modifi:[13,15,22],modul:[23,24],more:[6,10,11,22],multipl:[6,11,16],must:[1,7,15],mutat:[6,7,10,11,13,15],naiv:11,name:[1,2,6,7,10,11,15,16,19,22],namespac:1,nearbi:22,need:[6,10,13,15,21,22],nest:15,new_project:1,nlpprogress:10,non:13,none:[1,6,10,11,13,15,16,21,22],nonetyp:1,normal:[11,13,15],normalize_utter:[0,12],note:6,noth:15,notic:6,notimplementederror:22,now:11,number:[6,10,15,22],numer:[6,15],numerical_ent:[0,14],numericalent:15,obj:[13,15],obj_typ:15,object:[2,6,7,15,16,19,22],obtain:15,occurr:11,odd:22,offer:[1,22],onc:[6,10],one:[6,10],onli:[6,10],oper:[6,13],option:[1,6,7,10,11,13,15,16,22],order:22,organ:1,origin:[2,15],other:[10,11,15,22],out:11,output:[6,11,13,22],over:[11,15,22],overal:6,overrid:[15,22],overridden:[15,22],own:15,packag:[23,24],page:23,paramet:[1,6,10,11,22],pars:[6,15],parser:[0,15,16,23,24],part:6,pass:[6,10,11],path:22,pattern:6,peopl:[6,15],people_ent:[0,14],people_entity_prop:2,peopleent:15,per:[6,10],perform:22,pertain:10,pipelin:22,place:[6,22],plain:11,plugin:[0,6,10,11,13,14,15,23,24],pluginfn:[10,13,15,17],poetri:1,point:[1,7,11],possibl:16,post:[7,22],postprocess:[0,15,16,22,23,24],postprocessor:[2,15,16,22],pre:[7,10,17,22],preceed:22,predict:[11,22],prefer:[21,22],preprocess:[0,22,23,24],preprocessor:[2,6,22],present:[10,15],prevent:[6,15],priorit:22,privat:[6,22],procedur:22,process:[6,7,22],processor:22,processor_typ:22,produc:11,product:[15,16,22],progress:[15,16],project:[0,2,21,24],prop:13,properti:[6,15],property_:15,proport:11,provid:[2,6,7,10,11,13,15,17,18,20,21],purpos:15,put:22,python:13,pytz:6,qualifi:11,queri:22,rais:[10,11,13,15,21,22],rang:[2,15],rather:22,reach:6,read:6,receiv:22,recurs:15,reduc:[11,15],refer:[13,15],relat:[6,10],relationship:10,remain:11,remov:[16,19],report:10,repres:10,represent:[2,11,13,15],requir:[6,22],reset:22,resid:13,respect:15,respons:[6,13],restaur:22,result:22,retriev:22,root:1,rule:[10,16],rule_slot_fil:[8,9],rulebasedslotfillerplugin:10,run:[6,22],safeguard:22,sai:22,same:16,scaffold:1,schema:10,score:[11,15,16],screen:1,search:[6,23],section:6,self:10,sentenc:[6,13,15],sentence2vecplugin:7,server:6,servic:6,set:[6,7,10,11,15,16,22],set_valu:15,shall:10,share:16,ship:13,should:[6,10,11,15,16,22],show:1,signal:[0,2,11,14],signatur:[10,22],signific:10,simpl:[1,22],sinc:[13,22],singl:[10,11,13,16],size:11,skip:15,slot:[0,10,14,16,22],slot_fil:[8,9],slot_nam:[2,10,15],slot_typ:16,slow:6,smallest:15,some:[11,13,15,22],somewher:6,sort:22,sourc:[1,2,6,7,10,11,13,15,16,19,21,22],sparingli:21,specif:[6,15,21],specifi:[1,6],stage:7,stall:6,standard:[6,13],start:[1,2,13],state:22,str:[1,6,10,11,13,15,16,19,21,22],strategi:13,strength:[2,11],string:[6,11,13],strong:11,stronger:22,structur:[7,15],sub:22,subclass:[6,15,22],submodul:[0,4,5,8,9,12,14,24],subpackag:[23,24],sugar:[6,15],summar:7,summari:7,support:[1,6],suppos:[15,22],sure:6,syntact:6,syntat:15,system:[10,22],take:11,target:22,task:22,tell:[10,15],templat:1,tend:6,test:[13,15,22],test_ent:15,test_merge_asr_output:13,test_workflow:22,text:[0,4,8,12,16],than:[10,11],them:10,thi:[1,6,10,11,13,15,16,18,19,21,22],third:10,those:[6,15],threshold:11,through:[6,15,22],throughout:21,throughtout:2,thu:22,time:[6,15],time_ent:[0,14],time_entity_prop:2,time_interval_ent:[0,14],timeent:[10,15],timeinterv:6,timeintervalent:15,timeout:6,timezon:6,todai:15,token:[10,15],total:11,train:22,transcript:13,transform:[1,6,13],travers:15,traverse_dict:15,tree:11,trial:11,triplet:15,tupl:[10,11,15],tutori:[13,15,22],two:10,type:[0,1,2,6,10,11,13,23,24],type_:[13,19],typeerror:[10,11,13,15,22],umm:13,unawar:7,understand:16,union:[13,15],uniqu:11,unit:[2,15],unless:10,unset:13,updat:[10,15,16,22],update_workflow:6,updateworkflowstringfn:[13,17],upto:22,url:6,usag:1,use:[1,7,22],used:[2,6,21,22],useful:15,user:[1,22],uses:1,using:[1,6,11,15,22],util:[0,1,10,11,14,16,23,24],utter:[0,13,14,15],valid:[6,15],validate_typ:15,valu:[2,6,7,10,11,13,15,16,19,22],variant:15,variou:13,verifi:15,vernacular:[1,13],version:[1,22],victori:11,vote:[8,9],vote_sign:11,voteintentplugin:11,voteplugin:11,want:[13,16,22],warn:21,weak:11,weight:11,well:[6,22],were:[6,15,16],when:[6,22],where:[1,6,15,16,22],which:[6,11,13,15,16,22],whole:15,win:11,within:[6,13,15,16,19],words2num_plugin:7,workflow:[0,6,7,10,11,13,23,24],workflow_public_properti:2,world:1,worst:11,would:[6,13,22],wrap:15,written:7,yaml:10,yield:11,you:22},titles:["dialogy package","dialogy.cli package","dialogy.constants package","dialogy.errors package","dialogy.parser package","dialogy.parser.text package","dialogy.parser.text.entity package","dialogy.plugin package","dialogy.postprocess package","dialogy.postprocess.text package","dialogy.postprocess.text.slot_filler package","dialogy.postprocess.text.voting package","dialogy.preprocess package","dialogy.preprocess.text package","dialogy.types package","dialogy.types.entity package","dialogy.types.intent package","dialogy.types.plugin package","dialogy.types.signal package","dialogy.types.slots package","dialogy.types.utterances package","dialogy.utils package","dialogy.workflow package","Welcome to dialogy\u2019s documentation!","dialogy"],titleterms:{base_ent:15,cli:1,constant:2,content:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],dialogi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],document:23,duckling_pars:6,duration_ent:15,entiti:[6,15],error:3,indic:23,intent:16,intent_vot:11,location_ent:15,logger:21,merge_asr_output:13,modul:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],normalize_utter:13,numerical_ent:15,packag:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],parser:[4,5,6],people_ent:15,plugin:[7,17],postprocess:[8,9,10,11],preprocess:[12,13],project:1,rule_slot_fil:10,signal:18,slot:19,slot_fil:10,submodul:[1,6,7,10,11,13,15,18,21,22],subpackag:[0,4,5,8,9,12,14],tabl:23,text:[5,6,9,10,11,13],time_ent:15,time_interval_ent:15,type:[14,15,16,17,18,19,20],util:[15,21],utter:20,vote:11,welcom:23,workflow:22}})