/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package filedownloader;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author Siyuan
 */
public class wnpChanger {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        wnpChanger w = new wnpChanger();
        String strs[]=w.importFiles("E://src/src.txt");
        /*for(int i=0;strs[i]!=null;i++)
        {
            System.out.println(strs[i]+i);
        }*/
        w.replacewnp(strs);
    }

    public void replacewnp(String[] filenames) {
        for(int i=0;filenames[i]!=null;i++)
        {
            try {
                String filename="E://HCS/"+filenames[i];  
                System.out.println(filename);
                FileReader fr= new FileReader(filename);
                String content="";
                int ch;
                while((ch= fr.read())!=-1)
                {
                    content+=(char)ch;
                }
                System.out.println(content);
                String content2=content.replaceAll("wnp", "hcs");
                System.out.println(content2);
                FileWriter fw = new FileWriter(filename);
                fw.write(content2,0,content2.length());
                fw.flush();
            } catch (FileNotFoundException ex) {
                Logger.getLogger(wnpChanger.class.getName()).log(Level.SEVERE, null, ex);
            } catch (IOException ex) {
                Logger.getLogger(wnpChanger.class.getName()).log(Level.SEVERE, null, ex);
            } 
        }
    }

    public String[] importFiles(String url) {
        String[] sArray = new String[200];
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(url)));
            String str = "";
            int count = 0;
            while ((str = br.readLine()) != null) {
                sArray[count++] = str;
                //System.out.println(str + count);
            }
        } catch (FileNotFoundException ex) {
            Logger.getLogger(wnpChanger.class.getName()).log(Level.SEVERE, null, ex);
        } catch (IOException ex) {
            Logger.getLogger(wnpChanger.class.getName()).log(Level.SEVERE, null, ex);
        }
        return sArray;
    }
}
