import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class EmployeeTest {

	@Given("^I am a \"([a-zA-Z]{1,})\" Tester$")
	public void I_am_tester(String character){
		System.out.println("@Given: I am a " +character+ " Tester");
		
	}
	
	@When("^I go to work$")
	public void I_goto_work(){
		
		System.out.println("@When: I goto work");
	}
	
	
	@And("^My boss \"([a-zA-Z]{1,})\" me$")
	public void My_boss_reaction(String action){
		System.out.println("@And: My boss "+action+" me");
	}



	@Then("^I \"([a-zA-Z]{1,})\" it$")
	public void result_of_my_work(String result){
		System.out.println("@Then: I "+result+" it");
	}

	@But("^The developer \"([A-Za-z][A-Za-z]{1,})\" me$")
	public void deveopler_reaction(String reaction){
		System.out.println("@But: The developer "+reaction +" me");
		
		System.out.println("*******************************************");
	}
}