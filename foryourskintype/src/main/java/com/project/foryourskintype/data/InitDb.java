package com.project.foryourskintype.data;

import com.google.gson.Gson;
import com.project.foryourskintype.domain.Item;
import com.project.foryourskintype.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import javax.transaction.Transactional;
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

        private final EntityManager em;
        private final ItemRepository itemRepository;

        public void dbInit() throws IOException, ParseException {

//            String path = getClass().getResource("").getPath() + "itemdata.json";
            String path = "C:\\Users\\Yanglet\\Project\\foryourskintype\\foryourskintype\\src\\main\\java\\com\\project\\foryourskintype\\data\\itemdata.json";
            FileReader reader = new FileReader(path);
            Object parse = new JSONParser().parse(reader);
            JSONArray jsonList = (JSONArray) parse;

            for (Object o : jsonList) {
                itemRepository.save(new Gson().fromJson(o.toString(), Item.class));
            }
        }
    }
}
