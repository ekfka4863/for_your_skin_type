package com.project.foryourskintype.data;

import com.google.gson.Gson;
import com.project.foryourskintype.domain.Item;
import com.project.foryourskintype.domain.LikedItem;
import com.project.foryourskintype.domain.Member;
import com.project.foryourskintype.repository.ItemRepository;
import com.project.foryourskintype.repository.LikedItemRepository;
import com.project.foryourskintype.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class InitDb {

    private final InitService initService;

    @PostConstruct
    public void init() throws IOException, ParseException {
        initService.dbInit();
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    static class InitService {

        private final ItemRepository itemRepository;
        private final MemberRepository memberRepository;
        private final LikedItemRepository likedItemRepository;

        public void dbInit() throws IOException, ParseException {

//            String path = getClass().getResource("").getPath() + "itemdata.json";
            String path = "C:\\Users\\Yanglet\\Project\\foryourskintype\\foryourskintype\\src\\main\\java\\com\\project\\foryourskintype\\data\\itemdata.json";
            FileReader reader = new FileReader(path);
            Object parse = new JSONParser().parse(reader);
            JSONArray jsonList = (JSONArray) parse;

            for (Object o : jsonList) {
                itemRepository.save(new Gson().fromJson(o.toString(), Item.class));
            }
            Member member1 = new Member("박유저",
                    20,
                    "woman",
                    "user1@gamil.com",
                    "user1_password",
                    "01012345678");
            Member member2 = new Member("양글렛",
                    24,
                    "man",
                    "yanglet@gmail.com",
                    "yanglet_pw",
                    "01023124123");


            LikedItem likedItem1 = LikedItem.createLikedItem(itemRepository.findOne(3L).get(), member1);
            LikedItem likedItem2 = LikedItem.createLikedItem(itemRepository.findOne(5L).get(), member2);

            likedItemRepository.save(likedItem1);
            likedItemRepository.save(likedItem2);
            memberRepository.save(member1);
            memberRepository.save(member2);
        }
    }
}
